"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface SidebarContextType {
    isOpen: boolean;
    toggleNav: () => void;
    closeNav: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(prev => !prev);
        document.body.classList.toggle('active', !isOpen);
    };

    const closeNav = () => {
        setIsOpen(false);
        document.body.classList.remove('active');
    };

    return (
        <SidebarContext.Provider value={{ isOpen, toggleNav, closeNav }}>
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebar = (): SidebarContextType => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error('useSidebar must be used within a SidebarProvider');
    }
    return context;
};
