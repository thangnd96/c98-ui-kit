import type { SyntheticEvent } from 'react'

export type IContentEditableEvent = SyntheticEvent<any, Event> & { target: { value: string } };
type Modify<T, R> = Pick<T, Exclude<keyof T, keyof R>> & R;
type DivProps = Modify<JSX.IntrinsicElements["div"], { onChange: ((event: IContentEditableEvent) => void) }>;

export interface IContentEditableProps extends DivProps {
  html: string,
  style?: Object,
  tagName?: string,
  disabled?: boolean,
  className?: string,
  innerRef?: React.RefObject<HTMLElement> | Function,
}
