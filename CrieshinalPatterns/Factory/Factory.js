class SimpleMembership {
    constructor(name, cost = 50) {
        this.name = name;
        this.cost = cost;
    }
}
class StandardMembership {
    constructor(name, cost = 150) {
        this.name = name;
        this.cost = cost;
    }
}
class PremiumMembership {
    constructor(name, cost = 500) {
        this.name = name;
        this.cost = cost;
    }
}
class MemberFactory {
    create(name, type = 'simple') {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
        const member = new Membership(name);
        member.type = type;
        return member;
    }
}
MemberFactory.list = {
    simple: SimpleMembership,
    standard: StandardMembership,
    premium: PremiumMembership,
};
const factory = new MemberFactory();
const members = [
    factory.create('Nazar', 'simple'),
    factory.create('Alexander', 'standard'),
    factory.create('Sergiy', 'premium')
];
