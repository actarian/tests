import Recks from 'recks';

!Recks;

export const Item = (props) => {
	return <div class="item" onClick={props.onClick}>{props.key}</div>;
};
