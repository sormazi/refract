import {
    withEffects,
    EffectHandler,
    EffectFactory,
    ObservableComponent
} from '../index'

describe('refract-react-rxjs', () => {
    interface Effect {
        type: string
        value: number
    }
    interface Props {
        value: number
    }

    const noop = (...args) => void 0

    const effectHandler: EffectHandler<Props, Effect> = props => (
        value: Effect
    ) => {
        noop(value)
    }

    const effectFactory: EffectFactory<Props, Effect> = props => component => {
        const value$ = component.observe<number>('value')

        return value$.map(value => ({
            type: 'MyEffect',
            value
        }))
    }

    const withEffectsHOC = withEffects<Props, Effect>(effectHandler)

    it('should work', () => {
        const WithEffects = withEffectsHOC(effectFactory)
    })
})