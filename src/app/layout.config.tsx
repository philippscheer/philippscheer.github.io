import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';


/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Image
          style={{borderRadius: 99}}
          width={32}
          height={32}
          src="/images/avatar-32x32.webp"
          alt="Avatar"
          />
        Philipp Scheer
      </>
    ),
  },

  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [],
};
