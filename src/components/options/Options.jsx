
import OptionsButton from "./OptionsButtom";

import css from "./OptionsButtom";

export default function Options({ handler, reset, total }) {
  return (
    <div className={css.options}>
      <OptionsButton handlers={handler} type="good">
        Good 
      </OptionsButton>
      <OptionsButton handlers={handler} type="neutral">
        Neutral  
      </OptionsButton>
      <OptionsButton handlers={handler} type="bad">
        Bad 
      </OptionsButton>
      { total > 0 && <OptionsButton handlers={reset}>Reset</OptionsButton>  }
    </div>
  );
}