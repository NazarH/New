interface Sample{
    reply(complaint: object): any,
    add(complaint: object): any,
}

class Complaints implements Sample{
    complaints: any[];

    constructor(){
        this.complaints = [];
    }

    reply(complaint: object){}

    add(complaint: object){
        this.complaints.push(complaint);
        return this.reply(complaint);
    }
}

class ProductComplaint extends Complaints{
    reply({id, customer, details}){
        return `Product: ${id}, customer: ${customer}, details: ${details}.`;
    }
}

class ServiceComplaints extends Complaints{
    reply({id, customer, details}){
        return `Service: ${id}, customer: ${customer}, details: ${details}.`;
    }
}

class ComplRegFacade{
    register(customer: string, type: string, details: string){
        const id = Date.now();
        let complaint;

        if(type === 'service'){
            complaint = new ServiceComplaints();
        } else {
            complaint = new ProductComplaint();
        }

        return complaint.add({id, customer, details});
    }
}

const registry = new ComplRegFacade();

console.log(registry.register('Some Name', 'service', 'недоступний'));
console.log(registry.register('Ather Name', 'product', 'помилка'));
