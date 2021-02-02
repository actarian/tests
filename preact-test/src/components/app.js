import { h } from 'preact';
import { useState } from 'preact/hooks';
import { getCount } from '../count';
import { Item } from './item';

const App = () => {
    const count = getCount();    
	const [index, setIndex] = useState(-1);	
	return (
	<div id="app">
		<strong>Preact</strong>
		<div>count <span>{count}</span></div>
		<div>index <span>{index}</span></div>
		{new Array(count).fill(0).map((v, i) => (<Item index={i + 1} onClick={() => setIndex(i + 1)} />))}
	</div>
	);
};

export default App;
