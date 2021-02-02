import Recks from 'recks';
import { Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { getCount } from '../count';
import { Item } from './item';

!Recks;

const count = getCount();

export function App() {
  const index$ = new Subject();
  const name$ = new Subject();
  const view$ = name$.pipe(
    map((x) => (x ? `Hello, ${x}!` : '')),
    startWith('')
  );
  return (
    <div class="App">
      <strong>Recks</strong>
      <div>count <span>{count}</span></div>
      <div>index <span>{index$}</span></div>
      {
        new Array(count).fill(0).map((v, i) => (<Item key={i + 1} onClick={() => index$.next(i + 1)} />))
      }
      <input
        placeholder={'enter your name'}
        onInput={(e) =>
          name$.next(e.target.value)
        }
      />
      {view$}
    </div>
  );
}
