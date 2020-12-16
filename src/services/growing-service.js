
export default class GrowingService {

    data= [
        {
            id: 1,
            name: 'Огурец',
            coordinates: [[43.11, 131.88],[55.79,49.11]] },
        {
            id: 2,
            name: 'Помидор',
            coordinates: [[59.93,30.31],[56.01,92.85]] }

    ];

    getPlants() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data);
            },0);
        });
    };

}