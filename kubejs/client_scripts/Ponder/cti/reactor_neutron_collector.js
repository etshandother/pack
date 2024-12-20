Ponder.registry((event) => {
    event.create("cti:reactor_neutron_collector")
        .scene("kubejs:reactor_neutron_collector", "反应堆中子素收集器", "kubejs:reactor_neutron_collector", (scene, utils) => {
        scene.showBasePlate()
        scene.idle(5)
        scene.world.showSection([3, 1, 3], Direction.DOWN)
        scene.idle(5)
        scene.text(30, "反应堆中子素收集器是一种过热钠处理装置，该装置可以在利用过热钠发电的同时获得电子、中子与质子材料，是上黑洞前获取这些材料的主要来源", [3.5,1.5,3.5])
        scene.idle(30)
        scene.idle(15)
        scene.text(50, "它可以从左侧的气体容器中输入过热钠并将冷却后的钠蒸汽输出到右侧的气体容器中，提取产物则输出至上方容器", [3.5,1.5,3.5])
        scene.idle(50)
        scene.idle(15)
        scene.text(50, "需要注意的是其必须放入催化剂才能工作，且不同的催化剂有不同的效率与产物，被损耗的概率也不同", [3.5,1.5,3.5])
        scene.idle(50)
        scene.idle(15)
        scene.addKeyframe()
        scene.text(125, "以下方块属于气体容器：", [3.5,1.5,3.5])
        scene.idle(20)
        scene.idle(15)
        scene.world.showSection([1, 1, 1], Direction.DOWN)
        scene.text(20, "化学品储罐", [1.5,1.5,1.5])
        scene.idle(20)
        scene.idle(15)
        scene.world.setBlocks([1, 1, 1], "mekanism:ultimate_pressurized_tube",false)
        scene.text(20, "加压管道", [1.5,1.5,1.5])
        scene.idle(20)
        scene.idle(15)
        scene.world.setBlocks([1, 1, 1], "ae2:interface",false)
        scene.text(20, "以及AE2的ME接口", [1.5,1.5,1.5])
        scene.idle(20)
        scene.idle(15)
        scene.world.setBlocks([1, 1, 1], "minecraft:air",false)
        scene.text(30, "由于技术原因，mek的管道无法在思索界面展示连接材质，我们会尽量减少mek管道的出现")
        scene.idle(30)
        scene.idle(15)
        scene.world.showSection([6, 1, 3, 4, 1, 3], Direction.DOWN)
        scene.addKeyframe()
        scene.text(20, "过热钠从左侧注入", [5.5,1.5,3.5])
        scene.idle(20)
        scene.idle(15)
        scene.world.showSection([2, 1, 3, 0, 1, 3], Direction.DOWN)
        scene.text(20, "钠蒸汽从右侧输出", [1.5,1.5,3.5])
        scene.idle(20)
        scene.idle(15)
        scene.world.showSection([3, 2, 3], Direction.DOWN)
        scene.text(20, "上方放置收集产物的容器", [3.5,2.5,3.5])
        scene.idle(20)
        scene.idle(15)
        scene.rotateCameraY(-180)
        scene.idle(15)
        scene.world.showSection([3, 1, 4, 3, 1, 6], Direction.DOWN)
        scene.text(30, "催化剂支持AE等自动化输入方法，亦可手动放入", [3.5,1.5,5.5])
        scene.idle(30)
        scene.idle(15)
        scene.rotateCameraY(-180)
        scene.idle(15)
        scene.world.showSection([3, 1, 2], Direction.DOWN)
        scene.text(30, "之后连接任意面输出能量即可，不输出也不影响工作",[3.5,1.5,2.5])
        scene.idle(30)
        scene.idle(15)
        scene.addKeyframe()
        scene.rotateCameraY(90)
        scene.world.setBlocks([5, 1, 3, 6, 1, 3], "ae2:cable_bus",true)
        scene.world.modifyTileNBT([5,1,3,6,1,3],nbt => {
            nbt.cable = {
                id: "ae2:fluix_covered_cable",
                visual: {
                    connections: ["east","west"]
                }
            }
        },true)
        scene.world.modifyTileNBT([5,1,3],nbt => {
            nbt.west = {
                id:"ae2:export_bus"
            }
        },true)
        scene.overlay.showOutline("red", {}, [4, 1, 3, 6, 1, 3], 30)
        scene.text(30, "我们极度反对用AE2的输出总线输出气体，即使打满加速升级速度也远低于pipez气体管道和终极加压管道",[5.5,1.5,3.5])
        scene.idle(30)
        scene.idle(15)
        scene.world.setBlocks([5, 1, 3, 6, 1, 3], "pipez:gas_pipe",true)
        scene.world.modifyBlock([5, 1, 3], (state) => state.with("east", "true"), false)
        scene.world.modifyBlock([6, 1, 3], (state) => state.with("east", "true"), false)
        scene.world.modifyBlock([5, 1, 3], (state) => state.with("west", "true"), false)
        scene.world.modifyBlock([6, 1, 3], (state) => state.with("west", "true"), false)
        scene.rotateCameraY(-90)
        scene.text(30, "打了终极管道升级的pipez管道与终极加压管道速率相差不大，不过加压管道有缓存且不需要储罐中转，各位可自行选择",[5.5,1.5,3.5])
        scene.idle(30)
    })
})
///setblock 2271 72 1210 pipez:gas_pipe[down=false,east=true,has_data=false,north=false,south=false,up=false,waterlogged=false,west=true]