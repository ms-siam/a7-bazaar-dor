"use client";

import { Select, ListBox } from "@heroui/react";

export type SortOption = "default" | "price-asc" | "price-desc";

const OPTIONS: { value: SortOption; label: string }[] = [
    { value: "default", label: "Default" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
];

type Props = {
    value: SortOption;
    onChange: (value: SortOption) => void;
};

const SortDropdown = ({ value, onChange }: Props) => {
    return (
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <span className="whitespace-nowrap text-gray-500">Sort</span>

            <Select
                aria-label="Sort products"
                value={value}
                onChange={(key) => {
                    if (key) onChange(String(key) as SortOption);
                }}
                className="w-fit"
            >
                <Select.Trigger>
                    <Select.Value />
                    <Select.Indicator />
                </Select.Trigger>

                <Select.Popover className="min-w-48">
                    <ListBox>
                        {OPTIONS.map((option) => (
                            <ListBox.Item
                                key={option.value}
                                id={option.value}
                                textValue={option.label}
                            >
                                {option.label}
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                        ))}
                    </ListBox>
                </Select.Popover>
            </Select>
        </div>
    );
};

export default SortDropdown;