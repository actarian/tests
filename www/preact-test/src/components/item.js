import { h } from 'preact';

export const Item = (props) => {
	return <div class="item" onClick={props.onClick}>{props.index}</div>;
};
