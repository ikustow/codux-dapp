import { LinksFunction, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { getUrlOriginWithPath } from '~/utils';
import styles0 from './route.module.scss';
import LogoPng from '../../../src/assets/img/logo.png';
import { TonButtonCoduxComponent } from '../../../src/components/ton-button-codux-component/ton-button-codux-component';
import { MadeWithImagesRow } from '../../../src/components/made-with-images-row/made-with-images-row';
import { useTonWallet } from '@tonconnect/ui-react';
import { useNavigate } from '@remix-run/react';
import { useEffect } from 'react';

export const loader = ({ request }: LoaderFunctionArgs) => {
    return { canonicalUrl: getUrlOriginWithPath(request.url) };
};

export default function HomePage() {
    const wallet = useTonWallet();
    const navigate = useNavigate();

    if (wallet ) {
        // Устанавливаем флаг, чтобы предотвратить повторное выполнение
        navigate('/DonatesPage');
    }


    return (
        <div className={styles0.root}>
            <div className={styles0.internal}>
                <h1 className={styles0['main-title']}>DonApp</h1>
                <img src={LogoPng} className={styles0.logo} alt={'logo'} />
                <div className={styles0['button-ton']}>
                    <TonButtonCoduxComponent />
                </div>
                <h2 className={styles0.subtitle}>Made with</h2>
                <MadeWithImagesRow />
            </div>
        </div>
    );
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    const title = 'DonApp';
    const description = 'Welcome to the DonApp';
    const imageUrl = 'https://website-starter.com/og-image.png';

    return [
        { title },
        {
            name: 'description',
            content: description,
        },
        {
            tagName: 'link',
            rel: 'canonical',
            href: data?.canonicalUrl,
        },
        {
            property: 'robots',
            content: 'index, follow',
        },
        {
            property: 'og:title',
            content: title,
        },
        {
            property: 'og:description',
            content: description,
        },
        {
            property: 'og:image',
            content: imageUrl,
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image',
        },
        {
            name: 'twitter:title',
            content: title,
        },
        {
            name: 'twitter:description',
            content: description,
        },
        {
            name: 'twitter:image',
            content: imageUrl,
        },
    ];
};

export const links: LinksFunction = () => {
    return [
        {
            rel: 'icon',
            href: '/favicon.ico',
            type: 'image/ico',
        },
    ];
};
