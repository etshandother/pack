ServerEvents.recipes(event => {
  // 机器框架
  event.replaceInput({mod:'thermal',type:'crafting_shaped',output:'thermal:machine_frame'}, '#forge:ingots/iron','etshtinker:hardlead_plate')
  //磨粉机
  event.recipes.thermal.pulverizer_catalyst('kubejs:dust_petrotheum').primaryMod(3.0).secondaryMod(2.0).energyMod(8.0).minChance(0.05).useChance(0.1)
  event.recipes.thermal.pulverizer(Item.of('minecraft:diamond').withChance(3.5), 'createoreexcavation:raw_diamond').energy(1000)
  event.recipes.thermal.pulverizer(Item.of('minecraft:redstone').withChance(6.5), 'createoreexcavation:raw_redstone').energy(1000)
  event.recipes.thermal.pulverizer(Item.of('minecraft:emerald').withChance(3.5),'createoreexcavation:raw_emerald').energy(1000)
  event.recipes.thermal.pulverizer(Item.of('minecraft:amethyst_shard').withChance(6.5),'minecraft:amethyst_cluster').energy(1000)
  //罐装机器
  event.recipes.thermal.bottler('cti:advanced_dyano_augment',['kubejs:unfinished_advanced_dyano_augment',Fluid.of('kubejs:fluid_pyrotheum',1000)]).energy(10000)
  event.recipes.thermal.bottler('cti:advanced_output_augment',['kubejs:unfinished_advanced_output_augment',Fluid.of('kubejs:fluid_petrotheum',1000)]).energy(10000)
  event.recipes.thermal.bottler('cti:advanced_speed_augment',['kubejs:unfinished_advanced_speed_augment',Fluid.of('kubejs:fluid_cryotheum',1000)]).energy(10000)
  //更多插件
  event.shaped(Item.of('kubejs:unfinished_advanced_speed_augment',1),
  [
      'AAA',
      'BCD',
      'AAA'
  ],
    {
      A: 'kubejs:zirconium_alloy',
      B: 'thermal:machine_speed_augment',
      C: 'pneumaticcraft:printed_circuit_board',
      D: 'thermal:machine_efficiency_augment',
    }
  )
  event.shaped(Item.of('cti:advanced_catalyst_augment',1), [
        'AAA',
        'BCB',
        'AAA'
      ],
      {
        A: 'kubejs:zirconium_alloy',
        B: 'thermal:machine_catalyst_augment',
        C: 'pneumaticcraft:printed_circuit_board',
      }
      )
  event.shaped(Item.of('kubejs:unfinished_advanced_dyano_augment',1),
    [
        'AAA',
        'BCD',
        'AAA'
    ],
      {
        A: 'kubejs:zirconium_alloy',
        B: 'thermal:dynamo_fuel_augment',
        C: 'pneumaticcraft:printed_circuit_board',
        D: 'thermal:dynamo_throttle_augment',
      }
    )
  event.shaped(Item.of('cti:advanced_range_augment',1),
    [
        'AAA',
        'BCB',
        'AAA'
    ],
      {
        A: 'kubejs:zirconium_alloy',
        B: 'thermal:area_radius_augment',
        C: 'pneumaticcraft:printed_circuit_board',
      }
    )
  event.shaped(Item.of('kubejs:unfinished_advanced_output_augment',1),
      [
          'AAA',
          'BCB',
          'AAA'
      ],
        {
          A: 'kubejs:zirconium_alloy',
          B: 'thermal:machine_output_augment',
          C: 'pneumaticcraft:printed_circuit_board',
        }
      )
})