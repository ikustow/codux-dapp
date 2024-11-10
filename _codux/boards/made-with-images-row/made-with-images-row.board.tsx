import { createBoard } from '@wixc3/react-board';
import { MadeWithImagesRow } from '../../../src/components/made-with-images-row/made-with-images-row';

export default createBoard({
    name: 'MadeWithImagesRow',
    Board: () => <MadeWithImagesRow />,
});
