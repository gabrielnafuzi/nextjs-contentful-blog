import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import {
  BLOCKS,
  type Document as RichTextDocument,
  type Text,
} from '@contentful/rich-text-types'
import Image from 'next/image'

type RichTextProps = {
  document: RichTextDocument | null
}

export const RichText = ({ document }: RichTextProps) => {
  if (!document) {
    return null
  }

  return (
    <>
      {documentToReactComponents(document, {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => {
            if (
              node.content.length === 1 &&
              node.content.find(
                (item) =>
                  (item as Text).marks?.find((mark) => mark.type === 'code'),
              )
            ) {
              return (
                <pre>
                  <code>{children}</code>
                </pre>
              )
            }

            return <p>{children}</p>
          },

          [BLOCKS.EMBEDDED_ASSET]: (node) => {
            return (
              <Image
                src={`https:${node.data.target.fields.file.url}`}
                height={node.data.target.fields.file.details.image.height}
                width={node.data.target.fields.file.details.image.width}
                alt={node.data.target.fields.title}
              />
            )
          },
        },
      })}
    </>
  )
}
