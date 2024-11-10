import { createBoard } from '@wixc3/react-board';
import { TonButtonCoduxComponent } from '../../../src/components/ton-button-codux-component/ton-button-codux-component';

export default createBoard({
    name: 'TonButtonCoduxComponent',
    Board: () => <TonButtonCoduxComponent />,
    environmentProps: {
        windowHeight: 535,
    },
});
