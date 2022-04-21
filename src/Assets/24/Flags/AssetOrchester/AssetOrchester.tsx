import React from 'react';
import Au from '../Au';
import Be from '../Be';
import Bo from '../Bo';
import Br from '../Br';
import Ca from '../Ca';
import Cl from '../Cl';
import Co from '../Co';
import Cr from '../Cr';
import De from '../De';
import Ec from '../Ec';
import Es from '../Es';
import Fr from '../Fr';
import Gr from '../Gr';
import It from '../It';
import Lx from '../Lx';
import Mx from '../Mx';
import Nl from '../Nl';
import Ny from '../Ny';
import Pa from '../Pa';
import Pe from '../Pe';
import Po from '../Po';
import Us from '../Us';
import Credit from '../../Credit';
import LayoutSimfourg from '../../LayoutSimfourg';
import Location from '../../Location';

const Assets: {[key: string]: JSX.Element} = {
    Au: <Au />,
    Be: <Be />,
    Bo: <Bo />,
    Br: <Br />,
    Ca: <Ca />,
    Cl: <Cl />,
    Co: <Co />,
    Cr: <Cr />,
    Credit: <Credit />,
    De: <De />,
    Ec: <Ec />,
    Es: <Es />,
    Fr: <Fr />,
    Gr: <Gr />,
    It: <It />,
    Lx: <Lx />,
    LayoutSimfourg: <LayoutSimfourg />,
    Location: <Location />,
    Mx: <Mx />,
    Nl: <Nl />,
    Ny: <Ny />,
    Pa: <Pa />,
    Pe: <Pe />,
    Po: <Po />,
    Us: <Us />,
};

export type assetEnum =
    | 'Au'
    | 'Be'
    | 'Bo'
    | 'Br'
    | 'Ca'
    | 'Cl'
    | 'Co'
    | 'Cr'
    | 'Credit'
    | 'De'
    | 'Ec'
    | 'Es'
    | 'Fr'
    | 'Gr'
    | 'It'
    | 'Lx'
    | 'LayoutSimfourg'
    | 'Location'
    | 'Mx'
    | 'Nl'
    | 'Ny'
    | 'Pa'
    | 'Pe'
    | 'Po'
    | 'Us';

const AssetOrchester = (props: {asset: assetEnum}) => {
    return Assets[props.asset];
};

export default AssetOrchester;
