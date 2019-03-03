import React from 'react';

import Me from '@/components/Me/index';
import DashBoard from '@/components/DashBoard';

export default function() {
    return (
        <React.Fragment>
            <DashBoard />
            <Me />
        </React.Fragment>
    );
}
