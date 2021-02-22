export const styles = {
    header: {
        color: 'white',
        fontSize: 30
    },
    // if we left this as `textAlign: 'center'`, typescript would infer the type as a string, when in reality the "style" property requires very specific CSS values (one of them being center). this allows TSX to read 'center' as a const, which passes. we could also use `'center' as 'center'` and it would pass, but that looks more confusing.
    notesBox: {
        textAlign: 'center' as const
    },
    footer: {
        alignSelf: 'flex-end' as const
    }
}