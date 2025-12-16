import React from 'react';

export interface LinkItem {
  label: string;
  url: string;
}

export interface RecognitionItem {
  title: string;
  url?: string;
}

export interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}