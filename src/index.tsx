import { connect, Field, FieldIntentCtx } from 'datocms-plugin-sdk';
import { render } from './utils/render';
import ConfigScreen from './entrypoints/ConfigScreen';
import 'datocms-react-ui/styles.css';

connect({
  renderConfigScreen(ctx) {
    return render(<ConfigScreen ctx={ctx} />);
  },
  customMarksForStructuredTextField(field: Field, ctx: FieldIntentCtx) {
		return [
			{
				id: "subscript",
				label: "Subscript",
				icon: "subscript",
				keyboardShortcut: "ctrl+shift+d",
				appliedStyle: {
					verticalAlign: "sub",
					fontSize: "0.5rem",
				},
			},
			{
				id: "superscript",
				label: "Superscript",
				icon: "superscript",
				keyboardShortcut: "ctrl+shift+u",
				appliedStyle: {
					verticalAlign: "top",
					fontSize: "0.5rem",
          position: "relative",
          top: "-1px",
				},
			},
		];
	},
});

