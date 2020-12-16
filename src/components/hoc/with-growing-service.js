import React from 'react';
import { GrowingServiceConsumer } from '../growing-service-context';

const withGrowingService = () => (Wrapped) => {

    return (props) => {
        return (
            <GrowingServiceConsumer>
                {
                    (growingService) => {
                        return (<Wrapped {... props}
                                 growingService={growingService}/>);
                    }
                }
            </GrowingServiceConsumer>
        );
    }
};

export default withGrowingService;