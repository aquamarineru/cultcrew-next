import React from 'react';
import Link from 'next/link';
import BlockContent from '@sanity/block-content-to-react';
import styles from './styles.module.scss';
import cl from 'classnames';

const Block = ({ className, blocks }) => {

  const serializers = {
    types: {
      block: (props) => {
        const { node: { style } } = props;
        switch (style) {
          case 'normal':
            return <p className={cl(className, styles.textNormal)}>{props.children}</p>;
          case 'h1':
            return <h1>{props.children}</h1>;
          case 'h2':
            return <h2 className={cl(className, styles.textH2)}>{props.children}</h2>;
          case 'h3':
            return <h3 className={cl(className, styles.textH3)}>{props.children}</h3>;
          case 'blockquote':
            return <blockquote>{props.children}</blockquote>;
          case 'bullet':
            return <div className={cl(className, styles.textBullet)}>{props.children}</div>;
          case 'number':
            return <ol className={cl(className, styles.textNumber)}>{props.children}</ol>;
          default:
            return <p>{props.children}</p>;
        }
      },
    },
    marks: {
      strong: ({ children }) => <strong className={cl(className, styles.textStrong)}>{children}</strong>,
      em: ({ children }) => <em className={cl(className, styles.textEm)}>{children}</em>,
      link: ({ mark, children }) => {
        const { href } = mark;
        if (href) {
          const isExternal = href.startsWith('http');
          return isExternal ? (
            <a href={href} className={cl(className, styles.textLink)} target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          ) : (
            <Link href={href} className={cl(className, styles.textLink)}>
              {children}
            </Link>
          );
        } else {
          return <span className={cl(className, styles.textLink)}>{children}</span>;
        }
      },
    },
  };

  return (
    <div>
      <BlockContent
        blocks={blocks}
        serializers={serializers}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
      />
    </div>
  );
};

export default Block;
