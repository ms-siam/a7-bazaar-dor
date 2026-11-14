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
        <div className="flex items-center gap-3">
            <span className="text-gray-500">Sort</span>

            <Select
                aria-label="Sort products"
                value={value}
                onChange={(key) => {
                    if (key) onChange(String(key) as SortOption);
                }}
                className="w-56"
            >
                <Select.Trigger>
                    <Select.Value />
                    <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
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