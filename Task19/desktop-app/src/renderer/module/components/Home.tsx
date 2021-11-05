import { useState } from 'react';
import { ThemeContext, themes } from '../theme-context';
import { AnimalsMainComponent } from './AnimalsMainComponent';

export function Home() {
  const [theme, setTheme] = useState(themes.light);
  const toggleTheme = () => {
    setTheme(() => (theme === themes.dark ? themes.light : themes.dark));
  };
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeContext.Consumer>
        {(it) => {
          return (
            <div
              className="App"
              style={{
                backgroundColor: it.backgroundColor,
              }}
            >
              <AnimalsMainComponent changeTheme={toggleTheme} />
            </div>
          );
        }}
      </ThemeContext.Consumer>
    </ThemeContext.Provider>
  );
}
