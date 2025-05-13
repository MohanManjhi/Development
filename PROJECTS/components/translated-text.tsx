"use client"

import { useLanguage } from "@/contexts/language-context"

interface TranslatedTextProps {
  id: string
}

export function TranslatedText({ id }: TranslatedTextProps) {
  const { t } = useLanguage()
  return <>{t(id)}</>
}
