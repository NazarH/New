interface SubSpec{
    name: string,
    cost: number
}

class SimpleMembership implements SubSpec{
    constructor(public name: string, public cost = 50){}
}

class StandardMembership implements SubSpec{
    constructor(public name: string, public cost = 150){}
}

class PremiumMembership implements SubSpec{
    constructor(public name: string, public cost = 500){}
}

class MemberFactory {
    static list = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premium: PremiumMembership,
    }

    create(name: string, type = 'simple'): object{
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
        const member = new Membership(name);
        member.type = type;
        return member;
    }
}

const factory = new MemberFactory();
const members = [
    factory.create('Nazar', 'simple'),
    factory.create('Alexander', 'standard'),
    factory.create('Sergiy', 'premium')
];