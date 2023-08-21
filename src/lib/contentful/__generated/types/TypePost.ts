import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export type TypePostFields = {
  title: EntryFieldTypes.Symbol
  description: EntryFieldTypes.Text
  slug: EntryFieldTypes.Symbol
  content: EntryFieldTypes.RichText
}

export type TypePostSkeleton = EntrySkeletonType<TypePostFields, 'post'>
export type TypePost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypePostSkeleton, Modifiers, Locales>
