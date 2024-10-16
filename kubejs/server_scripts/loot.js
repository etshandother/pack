LootJS.modifiers(event => {
//移除该模组全部战利品
    event.removeGlobalModifier("@farmersdelight");
    event.removeGlobalModifier("@tconstruct");
    event.removeGlobalModifier("@ars_nouveau");
    event.removeGlobalModifier("@sophisticatedbackpacks");
    event.removeGlobalModifier("@extradelight");
    
    event.addLootTypeModifier(LootType.CHEST)
        .anyStructure(["#minecraft:village"], false)
        .addLoot(LootEntry.of("immersiveengineering:treated_wood_horizontal")
        .when((c) => c.randomChance(0.5)));
})