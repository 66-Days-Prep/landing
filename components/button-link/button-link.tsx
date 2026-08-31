import { Button, ButtonProps } from '@chakra-ui/react'
import NextLink, { LinkProps } from 'next/link'

import { forwardRef } from 'react'

export type ButtonLinkProps = Omit<ButtonProps, 'as'> & Omit<LinkProps, 'as'>

// A single anchor keeps download CTAs and keyboard navigation semantically correct.
export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  function ButtonLink(
    { href, children, prefetch, replace, scroll, shallow, locale, ...props },
    ref,
  ) {
    // Redirect endpoints and external destinations need document navigation,
    // not a prefetched React Server Component request.
    const documentNavigation =
      typeof href === 'string' &&
      (href.startsWith('/download/') || /^(https?:|mailto:|tel:|#)/.test(href))

    if (documentNavigation) {
      return (
        <Button as="a" ref={ref} href={href} {...props}>
          {children}
        </Button>
      )
    }

    return (
      <Button
        as={NextLink}
        ref={ref}
        href={href}
        prefetch={prefetch}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        locale={locale}
        {...props}
      >
        {children}
      </Button>
    )
  },
)
