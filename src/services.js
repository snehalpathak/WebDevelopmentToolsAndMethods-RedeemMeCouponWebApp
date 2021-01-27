const convertNetworkError = (err) => {
    return {
        code: 'network',
        err
    };
};

const checkResponse = (response) => {
    if (!response.ok) {
        return response.json().then((err) => Promise.reject(err));
    }
    return response.json();
}

export const fetchLoginStatus = () => {
    return fetch('/session', {
        method: 'GET',
    })
        .catch(convertNetworkError)
        .then((checkResponse))
};

export const fetchLogin = (username) => {
    return fetch('/session', {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify({ username }),
    })
        .catch(convertNetworkError)
        .then((checkResponse))
};

export const fetchLogout = () => {
    return fetch('/session', {
        method: 'DELETE',
    })
        .catch(convertNetworkError)
        .then((checkResponse))
};

export const fetchCoupons = () => {
    return fetch('/coupons', {
        method: 'GET',
    })
        .catch(convertNetworkError)
        .then((checkResponse))
}

export const fetchUserCoupons = (username) => {
    return fetch(`/coupons/${username}`, {
        method: 'GET'
    })
        .catch(convertNetworkError)
        .then((checkResponse))
}

export const fetchAddUserCoupons = (username, couponId, coupons) => {
    return fetch(`/coupons/${username}/${couponId}`, {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify({ coupons })
    })
        .catch(convertNetworkError)
        .then((checkResponse))
}

export const fetchRemoveUserCoupon = (username, couponId) => {
    return fetch(`/coupons/${username}/${couponId}`, {
        method: 'DELETE'
    })
        .catch(convertNetworkError)
        .then((checkResponse))
}

export const fetchAddCoupons = (username, coupons) => {
    return fetch(`/coupons/${username}`, {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify({ coupons })
    })
        .catch(convertNetworkError)
        .then((checkResponse))
}

export const fetchUpdateCoupons = (username, couponId, coupons) => {
    return fetch(`/coupons/${username}/${couponId}`, {
        method: 'PUT',
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify({ coupons })
    })
        .catch(convertNetworkError)
        .then((checkResponse))
}

export const fetchDeleteCoupon = (couponId) => {
    return fetch(`/coupons/${couponId}`, {
        method: 'DELETE',
    })
        .catch(convertNetworkError)
        .then((checkResponse))
}