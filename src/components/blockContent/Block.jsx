import React from 'react';
import styles from './styles.module.scss';
import cl from 'classnames';
import { IoCheckmarkCircle } from 'react-icons/io5';
import BlockContent from '@sanity/block-content-to-react';

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
            return <h2>{props.children}</h2>;
          case 'h3':
            return <h3>{props.children}</h3>;
          case 'blockquote':
            return <blockquote>{props.children}</blockquote>;
          case 'bullet':
            return (
              <div className={cl(className, styles.textBullet)}> {props.children} </div>
            );
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
      link: ({ value, children }) => {
        const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
        return (
          <a href={value?.href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={cl(className, styles.textLink)}>
            {children}
          </a>
        );
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
