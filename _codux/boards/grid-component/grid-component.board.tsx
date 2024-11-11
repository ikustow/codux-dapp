import { createBoard } from '@wixc3/react-board';
import { GridComponent } from '../../../src/components/grid-component/grid-component';
import gridComponentStyles from '../../../src/components/grid-component/grid-component.module.scss';
import styles from './grid-component.board.module.scss';
import classNames from 'classnames';

export default createBoard({
    name: 'GridComponent',
    Board: () => <GridComponent className={gridComponentStyles.root} />,
    environmentProps: {
        windowWidth: 375,
        windowHeight: 667,
    },
});
