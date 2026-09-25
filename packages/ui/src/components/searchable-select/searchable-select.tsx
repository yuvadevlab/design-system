import * as React from "react";
import { Search, Plus, Check, ChevronDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { Input } from "../input";
import { Button } from "../button";
import { cn } from "../../lib/utils";

/**
 * Option item structure for `SearchableSelect`.
 */
export interface SearchableSelectOption {
  /** The human-readable text label */
  label: string;
  /** The unique value identifier */
  value: string;
  /** Optional grouping category */
  group?: string;
  /** Optional icon identifier */
  icon?: string;
}

/**
 * Props for `SearchableSelect`.
 */
export interface SearchableSelectProps {
  /** List of selectable options */
  options: SearchableSelectOption[];
  /** Currently selected value */
  value?: string;
  /** Callback fired when an option is selected */
  onChange?: (value: string) => void;
  /** Placeholder text when nothing is selected */
  placeholder?: string;
  /** Search input placeholder text */
  searchPlaceholder?: string;
  /** Callback fired when the user adds a new custom option */
  onAddNew?: (searchQuery: string) => void;
  /** Custom label for the add-new button */
  addNewLabel?: string;
  /** Whether the select dropdown is disabled */
  disabled?: boolean;
  /** Additional CSS class names */
  className?: string;
  /** Unique HTML id attribute */
  id?: string;
}

/**
 * Searchable select component with live filtering, keyboard navigation, option grouping,
 * and optional creation of new entries.
 *
 * @example
 * ```tsx
 * <SearchableSelect
 *   options={[
 *     { label: "Claude 3.5 Sonnet", value: "anthropic/claude-3-5-sonnet" },
 *     { label: "GPT-4o", value: "openai/gpt-4o" },
 *   ]}
 *   value={selectedModel}
 *   onChange={setSelectedModel}
 *   placeholder="Choose model..."
 * />
 * ```
 */
export function SearchableSelect({
  options,
  value,
  onChange,
  placeholder = "Select an option...",
  searchPlaceholder = "Search...",
  onAddNew,
  addNewLabel = "Add new",
  disabled = false,
  className,
  id,
}: SearchableSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [highlightedIndex, setHighlightedIndex] = React.useState<number>(0);
  const listRef = React.useRef<HTMLDivElement>(null);
  const selectedOption = React.useMemo(() => {
    return options.find((opt) => opt.value === value);
  }, [options, value]);

  const filteredOptions = React.useMemo(() => {
    if (!search.trim()) return options;
    const q = search.toLowerCase();
    return options.filter(
      (opt) =>
        opt.label.toLowerCase().includes(q) ||
        (opt.group && opt.group.toLowerCase().includes(q)),
    );
  }, [options, search]);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (newOpen) {
      const idx = filteredOptions.findIndex((opt) => opt.value === value);
      setHighlightedIndex(idx >= 0 ? idx : 0);
    } else {
      setSearch("");
    }
  };

  const handleSearchChange = (q: string) => {
    setSearch(q);
    setHighlightedIndex(0);
  };

  React.useEffect(() => {
    if (open && listRef.current) {
      const activeEl = listRef.current.querySelector<HTMLElement>(
        "[data-highlighted='true']",
      );
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest" });
      }
    }
  }, [highlightedIndex, open]);

  const groupedOptions = React.useMemo(() => {
    const hasGroups = filteredOptions.some((opt) => opt.group);
    if (!hasGroups) return { Default: filteredOptions };

    return filteredOptions.reduce<Record<string, SearchableSelectOption[]>>(
      (acc, opt) => {
        const g = opt.group || "Other";
        if (!acc[g]) acc[g] = [];
        acc[g].push(opt);
        return acc;
      },
      {},
    );
  }, [filteredOptions]);

  const handleSelect = (val: string) => {
    onChange?.(val);
    setOpen(false);
    setSearch("");
  };
  const handleAddNew = () => {
    onAddNew?.(search.trim());
    setOpen(false);
    setSearch("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleOpenChange(true);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((p) =>
          p < filteredOptions.length - 1 ? p + 1 : p,
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((p) => (p > 0 ? p - 1 : 0));
        break;
      case "Enter":
        e.preventDefault();
        if (filteredOptions.length > 0 && filteredOptions[highlightedIndex]) {
          handleSelect(filteredOptions[highlightedIndex].value);
        } else if (onAddNew && search.trim()) {
          handleAddNew();
        }
        break;
      case "Escape":
      case "Tab":
        e.preventDefault();
        handleOpenChange(false);
        break;
    }
  };

  let currentIndex = 0;
  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <Button
          id={id}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
          onKeyDown={handleKeyDown}
          className={cn(
            "dl-searchable-select-trigger",
            !selectedOption && "dl-searchable-select-trigger--placeholder",
            className,
          )}
        >
          <span className="truncate">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown className="dl-select-icon" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="dl-searchable-select-content"
        onKeyDown={handleKeyDown}
      >
        <div className="dl-searchable-select-search">
          <Search className="dl-searchable-select-search-icon" />
          <Input
            placeholder={searchPlaceholder}
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="dl-searchable-select-search-input"
            autoFocus
          />
        </div>

        <div
          ref={listRef}
          onWheel={(e) => e.stopPropagation()}
          className="dl-searchable-select-list"
        >
          {Object.keys(groupedOptions).length === 0 ||
          (filteredOptions.length === 0 && !onAddNew) ? (
            <div className="dl-searchable-select-empty">
              No matching options found.
            </div>
          ) : (
            Object.entries(groupedOptions).map(([groupName, groupOpts]) => (
              <div key={groupName} className="py-1">
                {groupName !== "Default" && (
                  <div className="dl-searchable-select-group-header">
                    {groupName}
                  </div>
                )}
                {groupOpts.map((option) => {
                  const isSelected = option.value === value;
                  const itemIndex = currentIndex++;
                  const isHighlighted = itemIndex === highlightedIndex;

                  return (
                    <div
                      key={option.value}
                      data-highlighted={isHighlighted}
                      onClick={() => handleSelect(option.value)}
                      onMouseEnter={() => setHighlightedIndex(itemIndex)}
                      className={cn(
                        "dl-searchable-select-item",
                        isHighlighted &&
                          "dl-searchable-select-item--highlighted",
                        isSelected &&
                          !isHighlighted &&
                          "dl-searchable-select-item--selected",
                      )}
                    >
                      <span className="flex-1 truncate">{option.label}</span>
                      {isSelected && <Check className="dl-select-check" />}
                    </div>
                  );
                })}
              </div>
            ))
          )}
        </div>

        {onAddNew && (
          <div className="dl-searchable-select-add">
            <button
              type="button"
              onClick={handleAddNew}
              className="dl-searchable-select-add-btn"
            >
              <Plus className="size-3.5 shrink-0" />
              <span className="truncate">
                {search.trim()
                  ? `${addNewLabel} "${search.trim()}"`
                  : addNewLabel}
              </span>
            </button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
