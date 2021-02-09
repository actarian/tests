import { h } from 'preact';

!h;

export const Item = (props) => {
	return <div class="item" onClick={props.onClick}>{props.index}</div>;
};
