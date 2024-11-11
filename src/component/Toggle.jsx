import { createContext, useContext, useState } from 'react';

const ToggleContext = createContext();

const Toggle = ({ children }) => {
	const [active, setActive] = useState(false);

	return (
		<ToggleContext.Provider value={{ active, setActive }}>
			{children}
		</ToggleContext.Provider>
	);
};

const Active = ({ children }) => {
	const { active } = useContext(ToggleContext);
	return active ? <div>{children}</div> : null;
};

const Inactive = ({ children }) => {
	const { active } = useContext(ToggleContext);
	return !active ? <div>{children}</div> : null;
};

const Button = ({ children }) => {
	const { active, setActive } = useContext(ToggleContext);

	const handleClick = () => {
		setActive(!active);
	};

	return <button onClick={handleClick}>{children}</button>;
};

Toggle.Active = Active;
Toggle.Inactive = Inactive;
Toggle.Button = Button;

export default Toggle;
