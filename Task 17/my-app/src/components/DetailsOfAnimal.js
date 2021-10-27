export function DetailsOfAnimal({animal}) {
    return <div>
        <div>{animal.birthday}</div>
        <div>{animal.breed}</div>
        <div>{animal.gender}</div>
        <div>{animal.hobby}</div>
        <div>{animal.otherFeatures}</div>
    </div>
}
