import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful'

export type TypePageFields = {
  title: EntryFieldTypes.Symbol
  description: EntryFieldTypes.Text
  body: EntryFieldTypes.RichText
  slug: EntryFieldTypes.Symbol
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, 'page'>
export type TypePage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypePageSkeleton, Modifiers, Locales>
