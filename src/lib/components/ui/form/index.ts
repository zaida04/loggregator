import * as RadioGroupComp from "$lib/components/ui/radio-group";
import * as SelectComp from "$lib/components/ui/select";
import { Form as FormPrimitive, getFormField } from "formsnap";
import type { Writable } from "svelte/store";
import Button from "./form-button.svelte";
import Checkbox from "./form-checkbox.svelte";
import Description from "./form-description.svelte";
import Input from "./form-input.svelte";
import Item from "./form-item.svelte";
import Label from "./form-label.svelte";
import NativeSelect from "./form-native-select.svelte";
import RadioGroup from "./form-radio-group.svelte";
import SelectTrigger from "./form-select-trigger.svelte";
import Select from "./form-select.svelte";
import Switch from "./form-switch.svelte";
import Textarea from "./form-textarea.svelte";
import Validation from "./form-validation.svelte";

const Root = FormPrimitive.Root;
const Field = FormPrimitive.Field;
const Control = FormPrimitive.Control;
const RadioItem = RadioGroupComp.Item;
const NativeRadio = FormPrimitive.Radio;
const SelectContent = SelectComp.Content;
const SelectLabel = SelectComp.Label;
const SelectGroup = SelectComp.Group;
const SelectItem = SelectComp.Item;
const SelectSeparator = SelectComp.Separator;

export type TextareaGetFormField = Omit<ReturnType<typeof getFormField>, "value"> & {
	value: Writable<string>;
};

export {
	Root,
	Field,
	Control,
	Item,
	Input,
	Label,
	Button,
	Switch,
	Select,
	Checkbox,
	Textarea,
	Validation,
	RadioGroup,
	RadioItem,
	Description,
	SelectContent,
	SelectLabel,
	SelectGroup,
	SelectItem,
	SelectSeparator,
	SelectTrigger,
	NativeSelect,
	NativeRadio,
	//
	Root as Form,
	Field as FormField,
	Control as FormControl,
	Item as FormItem,
	Input as FormInput,
	Textarea as FormTextarea,
	Description as FormDescription,
	Label as FormLabel,
	Validation as FormValidation,
	NativeSelect as FormNativeSelect,
	NativeRadio as FormNativeRadio,
	Checkbox as FormCheckbox,
	Switch as FormSwitch,
	RadioGroup as FormRadioGroup,
	RadioItem as FormRadioItem,
	Select as FormSelect,
	SelectContent as FormSelectContent,
	SelectLabel as FormSelectLabel,
	SelectGroup as FormSelectGroup,
	SelectItem as FormSelectItem,
	SelectSeparator as FormSelectSeparator,
	SelectTrigger as FormSelectTrigger,
	Button as FormButton,
};
