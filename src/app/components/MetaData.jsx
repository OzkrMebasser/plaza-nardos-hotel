"use client"
import React from "react";
import { useLanguage } from "@/app/contexts/LanguageContext";

const MetaData = () => {
  const { getTranslations } = useLanguage();
  const translations = getTranslations();

  return (
    <>
      {translations.meta.tab}
    </>
  );
};

export default MetaData;
