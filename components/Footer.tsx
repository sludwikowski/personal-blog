import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mb-3 flex h-16 w-full max-w-7xl flex-col items-center justify-between space-y-3 border-t border-gray-500  px-3 text-center sm:mb-0 sm:h-20 sm:flex-row">
      <div className="text-gray-500">
        Powered by{' '}
        <a
          href="https://github.com/sludwikowski"
          target="_blank"
          rel="noreferrer"
          className="font-bold underline-offset-2 transition hover:text-gray-300 hover:underline"
        >
          @sludwikowski{' '}
        </a>
      </div>
      <div className="flex space-x-4 pb-4 sm:pb-0">
        <Link href="https://www.linkedin.com/in/sludwikowski/" className="group" aria-label="sludwikowski on Twitter">
          <svg aria-hidden="true" className="h-8 w-8 fill-gray-500 group-hover:fill-gray-300">
            <path
              d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"
              fillRule="evenodd"
            ></path>{' '}
          </svg>
        </Link>
        <Link href="https://github.com/sludwikowski" className="group" aria-label="sludwikowski on GitHub">
          <svg aria-hidden="true" className="h-6 w-6 fill-gray-500 group-hover:fill-gray-300">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
          </svg>
        </Link>
      </div>
    </footer>
  )
}
