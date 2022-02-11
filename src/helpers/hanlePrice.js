export const handlePrice = price => {
    price = price.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    return price
}