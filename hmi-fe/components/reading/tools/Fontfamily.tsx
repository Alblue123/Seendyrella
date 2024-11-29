"use client";

import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { ChevronDown } from 'lucide-react';
import { useFormatting } from '../formatting/UseFormatting';

export const FontFamily: React.FC = () => {
    const { fontFamily, setFontFamily } = useFormatting();

    const fontFamilies = ["Arial", "Calibri (body)", "Times New Roman", "Verdana", "Georgia"];

    const handleFontFamilyChange = (keys: any) => {
        const selectedFont = Array.from(keys)[0] as string;
        setFontFamily(selectedFont);
    };

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    variant="light"
                    className="min-w-[120px] justify-start"
                >
                    {fontFamily}
                    <ChevronDown className="h-3 w-3 ml-auto" />
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Font families"
                selectionMode="single"
                selectedKeys={new Set([fontFamily])}
                onSelectionChange={handleFontFamilyChange}
            >
                {fontFamilies.map((font) => (
                    <DropdownItem key={font}>{font}</DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
};