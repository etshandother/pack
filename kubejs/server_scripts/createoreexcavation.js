ServerEvents.recipes(event =>
{
//机械动力：矿石开掘配方,drilling后面的括号是需要输出的物品,矿脉名称,生成权重,以 32 RPM 为单位的提取时间。
//石英矿
event.recipes.createoreexcavation.drilling([Item.of('minecraft:quartz'),Item.of('minecraft:ancient_debris').withChance(0.05)],'{"text": "石英矿"}', 100, 200)
//钻头等级
.drill('createoreexcavation:netherite_drill')
//生物群落白名单
.biomeWhitelist('minecraft:is_nether')
//无限量
.alwaysInfinite()
//应力值
.stress(256)
//配方id
.id("quartz");


//碧空史莱姆
event.recipes.createoreexcavation.extracting('tconstruct:sky_slime 2000','{"text": "碧空史莱姆"}', 50, 100)
//钻头等级
.drill('#createoreexcavation:second_createore_drill')
//无限量
.alwaysInfinite()
//应力值
.stress(256)
//生物群落白名单
.biomeWhitelist('minecraft:is_overworld')
//配方id
.id("sky_slime");


//贫油
event.recipes.createoreexcavation.extracting('immersivepetroleum:crudeoil 500','{"text": "贫油"}', 200, 800)
//钻头等级
.drill('#createoreexcavation:second_createore_drill')
//无限量
.alwaysInfinite()
//应力值
.stress(128)
//生物群落白名单
.biomeWhitelist('minecraft:is_overworld')
//配方id
.id("poor_oil");


//富油
event.recipes.createoreexcavation.extracting('immersivepetroleum:crudeoil 4000','{"text": "富油"}', 100, 200)
//钻头等级
.drill('#createoreexcavation:second_createore_drill')
//无限量
.alwaysInfinite()
//应力值
.stress(128)
//生物群落白名单
.biomeWhitelist('forge:is_dry/overworld')
//配方id
.id("rich_oil");


//钴-阿迪特伴生矿
event.recipes.createoreexcavation.drilling([Item.of('tconstruct:raw_cobalt'), Item.of('tinkers_thinking:raw_ardite')], '{"text": "钴-阿迪特伴生矿"}', 100, 240)
.drill('#createoreexcavation:second_createore_drill')
.fluid('minecraft:lava')
.biomeWhitelist('minecraft:is_nether')
.alwaysInfinite()
.stress(128)
.id("cobalt_ardite_complex");


//衰变铅矿
event.recipes.createoreexcavation.drilling([Item.of('thermal:raw_lead'), Item.of('mekanism:raw_uranium')],'{"text": "衰变铅矿"}', 100, 200)
.drill('#createoreexcavation:drills')
.biomeWhitelist('minecraft:is_overworld')
.alwaysInfinite()
.stress(64)
.id("lead");


//重金属矿
event.recipes.createoreexcavation.drilling([Item.of('minecraft:raw_gold'), Item.of('mekanism:raw_osmium'),Item.of('thermal:raw_silver')],'{"text": "重金属矿"}', 100, 600)
.drill('#createoreexcavation:drills')
.biomeWhitelist('minecraft:is_overworld')
.alwaysInfinite()
.stress(256)
.id("osmium");


//硫化物矿
event.recipes.createoreexcavation.drilling([Item.of('thermal:cinnabar'), Item.of('thermal:sulfur')],'{"text": "朱砂矿"}', 150, 200)
.drill('#createoreexcavation:drills')
.biomeWhitelist('minecraft:is_overworld')
.alwaysInfinite()
.stress(120)
.id("cinnabar");


//硫化铁矿
event.recipes.createoreexcavation.drilling([Item.of('minecraft:raw_iron'), Item.of('etshtinker:bismuthinite').withChance(0.1)], '{"text": "硫化铁矿"}', 50, 200)
.drill('#createoreexcavation:second_createore_drill')
.fluid('minecraft:lava')
.biomeWhitelist('minecraft:is_overworld')
.alwaysInfinite()
.stress(256)
.id("iron_sulfide");


//赤铁矿
event.recipes.createoreexcavation.drilling([Item.of('minecraft:raw_iron'), Item.of('createoreexcavation:raw_redstone'),Item.of('minecraft:redstone').withChance(0.25)], '{"text": "赤铁矿"}', 100, 200)
.drill('#createoreexcavation:second_createore_drill')
.biomeWhitelist('minecraft:is_overworld')
.alwaysInfinite()
.stress(256)
.id("red_iron_ore");


//闪锌矿
event.recipes.createoreexcavation.drilling([Item.of('create:raw_zinc'), Item.of('minecraft:raw_iron'),Item.of('thermal:sulfur')], '{"text": "闪锌矿"}', 100, 200)
.drill('#createoreexcavation:second_createore_drill')
.biomeWhitelist('minecraft:is_overworld')
.alwaysInfinite()
.stress(256)
.id("sphalerite");


//烟煤矿
event.recipes.createoreexcavation.drilling([Item.of('minecraft:coal'), Item.of('thermal:sulfur'),Item.of('gobber2:gobber2_foo').withChance(0.1)], '{"text": "烟煤矿"}', 100, 100)
.drill('#createoreexcavation:second_createore_drill')
.fluid('minecraft:lava')
.biomeWhitelist('minecraft:is_overworld')
.alwaysInfinite()
.stress(128)
.id("bituminous_coal");


//高压晶体宝石矿
event.recipes.createoreexcavation.drilling([Item.of('createoreexcavation:raw_diamond'), Item.of('createoreexcavation:raw_emerald'),Item.of('minecraft:amethyst_cluster'),Item.of('minecraft:lapis_lazuli')], '{"text": "高压晶体矿"}', 50, 400)
.drill('#createoreexcavation:second_createore_drill')
.fluid('minecraft:lava')
.biomeWhitelist('minecraft:is_overworld')
.alwaysInfinite()
.stress(512)
.id("high_pressure_crystals");


//黄铜矿
event.recipes.createoreexcavation.drilling([Item.of('minecraft:raw_copper_block'), Item.of('minecraft:raw_iron'),Item.of('minecraft:raw_gold').withChance(0.3),Item.of('thermal:raw_silver').withChance(0.4)], '{"text": "黄铜矿"}', 50, 400)
.drill('#createoreexcavation:second_createore_drill')
.biomeWhitelist('minecraft:is_overworld')
.alwaysInfinite()
.stress(256)
.id("chalcopyrite");


//浓质铝硅酸盐矿
event.recipes.createoreexcavation.drilling([Item.of('immersiveengineering:raw_aluminum'), Item.of('minecraft:raw_iron'),Item.of('ae2:certus_quartz_dust').withChance(0.3),Item.of('gobber2:gobber2_globette').withChance(0.1)], '{"text": "浓质铝硅酸盐矿"}', 50, 400)
.drill('#createoreexcavation:second_createore_drill')
.fluid('minecraft:water')
.biomeWhitelist('minecraft:is_overworld')
.alwaysInfinite()
.stress(256)
.id("al");
},
);