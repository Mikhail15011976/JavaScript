function extractSpecialAttacks({ special }) {
    return special.map(({ id, name, icon, description }) => ({
        id,
        name,
        icon,
        description: description || 'Описание недоступно'
    }));
}

export default extractSpecialAttacks;
