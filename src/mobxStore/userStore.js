import { computed, observable } from 'mobx';

class UsersStore {
    @observable users = [];
    @observable company = "";

    getUsers() {
        this.users = [
            { id: 1, name: 'aaa' },
            { id: 2, name: 'bbb' }
        ];

        return this.users;
    }

    getCompany() {
        this.company = "company"
        return this.company;
    }

    addUser() {
        let rnd = Math.random(100);
        this.users.push({ id: rnd, name: 'ccc' })
    }

    updateCompany(name) {
        this.company = name;
    }
}

const usersStore = new UsersStore();

export default usersStore;