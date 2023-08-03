class UserResource {
    users = [
        'danial',
        'json',
        'mona'
    ]

    isUnique(name: string): boolean {
        return !(name && this.users.find((userName) => name.toLowerCase() === userName.toLowerCase()))
    }

    isGreaterThen40Chars(name: string): boolean {
        return !!(name && name.length < 40)
    }

    isNotEmpty(name: string): boolean {
        return !!(name && name.trim() !== '');
    }

    isSpecialCharExists(name: string): boolean {
        return !(name && /[@!#$%^&*()_+]/.test(name))
    }

}

export default UserResource;