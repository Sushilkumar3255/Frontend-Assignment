import Input from "../components/input/input";
import Group from "../components/group/group";
import Radio from "../components/radio/radio";
import Select from "../components/select/select";
import Ignore from "../components/ignore/ignore";
import Switch from "../components/checkbox/check";

export const CheckType = (field, info) => {
	if (field === "Input") return <Input {...info} />;
	else if (field === "Group") return <Group {...info} />;
	else if (field === "Radio") return <Radio {...info} />;
	else if (field === "Select") return <Select {...info} />;
	else if (field === "Ignore") return <Ignore {...info} />;
	else if (field === "Switch") return <Switch {...info} />;
};

export const CheckShowHide = (data) => {
    let showHide = false;
	data.map((field) => {
		if (field.validate.required === undefined) {
            showHide = true;
		}
	});
    return showHide;
};
