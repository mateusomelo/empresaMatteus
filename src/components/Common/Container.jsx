import clsx from 'clsx'

export default function Container({ as: Tag = 'div', className, children, ...props }) {
  return (
    <Tag className={clsx('container-page', className)} {...props}>
      {children}
    </Tag>
  )
}
